import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TetrahedronGeometry } from 'three/src/geometries/TetrahedronGeometry.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import { SearchService } from 'src/app/search-service.service';

@Component({
  selector: 'app-three-window',
  templateUrl: './three-window.component.html',
  styleUrls: ['./three-window.component.scss'],
})
export class ThreeWindowComponent {
  @ViewChild('canvasElement', { static: true })
  canvasElementRef!: ElementRef<HTMLCanvasElement>;
  @Input() cardThree: any;

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private controls!: OrbitControls;
  private rotationAngle = 0;

  // Variable para controlar la visibilidad de la pantalla de carga
  public isSceneLoaded: boolean = false;

  constructor(private http: HttpClient, private searchService: SearchService) {}

  ngOnInit(): void {
    this.setupScene();
    this.loadGLTFModel(this.cardThree[0]);
    this.setupOrbitControls();
    this.startAnimation();
  }

  //scene
  private setupScene(): void {
    this.scene = new THREE.Scene();
    //cambiar el color de fondo de la scena
    this.scene.background = new THREE.Color(0x333333);
    this.camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000); // Cambiamos el aspecto inicial a 1

    // Obtenemos el contenedor HTML del componente utilizando la referencia
    const container = this.canvasElementRef.nativeElement;

    // Creamos el renderer utilizando el contenedor como lienzo
    this.renderer = new THREE.WebGLRenderer({ canvas: container });

    // Ajustamos el tamaño del renderer al tamaño del contenedor
    const width = container.clientWidth;
    const height = container.clientHeight;
    this.renderer.setSize(width, height);

    // Actualizamos el aspecto de la cámara y el tamaño del renderer cuando cambie el tamaño del contenedor
    const handleResize = () => {
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      this.camera.aspect = newWidth / newHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(newWidth, newHeight);
    };

    // Agregamos el evento de cambio de tamaño del contenedor
    window.addEventListener('resize', handleResize);

    // Agregar una luz ambiente
    const ambientLight = new THREE.AmbientLight(0xffffff); // Color de la luz (gris oscuro)
    this.scene.add(ambientLight);
    // Agregar una luz direccional
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1); // Posición de la luz (x, y, z)
    this.scene.add(directionalLight);
  }

  //orbitControl
  private setupOrbitControls(): void {
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    // Bloquear el movimiento del objeto en el espacio
    this.controls.enablePan = false;
  }

  // animation
  private startAnimation(): void {
    let previousTime = 0; // Variable para almacenar el tiempo del cuadro anterior
    let isOrbiting = false; // Variable para determinar si el controlador de órbitas está activo

    // Agregar un evento para detectar cuando el usuario comienza a orbitar
    this.controls.addEventListener('start', () => {
      isOrbiting = true;
    });

    // Agregar un evento para detectar cuando el usuario deja de orbitar
    this.controls.addEventListener('end', () => {
      isOrbiting = false;
    });

    const animate = (currentTime: number) => {
      // Calcular el deltaTime (tiempo en milisegundos desde el cuadro anterior)
      const deltaTime = (currentTime - previousTime) * 0.0006; // Convertir de milisegundos a segundos
      previousTime = currentTime;

      if (this.cardThree[1]) {
        // Si no se está orbitando, incrementar la rotación en función del deltaTime
        if (!isOrbiting) {
          const rotationSpeed = 1; // Ajusta la velocidad de rotación aquí
          this.rotationAngle += rotationSpeed * deltaTime;

          // Aplicar la rotación al objeto
          this.scene.children.forEach((child) => {
            child.rotation.y = this.rotationAngle;
          });
        }
      }

      // Solicitar el siguiente cuadro de animación
      requestAnimationFrame(animate);

      // Renderizar la escena con las actualizaciones
      this.renderer.render(this.scene, this.camera);
    };

    // Iniciar la animación
    requestAnimationFrame(animate);
  }


  // Método para ajustar la posición y escala del objeto para que ocupe el espacio total de la cámara
  private fitToCamera(
    model: THREE.Object3D,
    camera: THREE.PerspectiveCamera
  ): void {
    const box = new THREE.Box3().setFromObject(model);
    const size = box.getSize(new THREE.Vector3()).length();
    const center = box.getCenter(new THREE.Vector3());

    model.position.x += model.position.x - center.x;
    model.position.y += model.position.y - center.y;
    model.position.z += model.position.z - center.z;

    camera.position.copy(center);
    camera.position.z += (size - this.cardThree[2]);

    // Ajustar los valores 'near' y 'far' de la cámara en función del tamaño del modelo
    const minDistance = size * 0.1;
    const maxDistance = size * 10;
    camera.near = minDistance;
    camera.far = maxDistance;

    camera.updateProjectionMatrix();
  }

  // Función para cargar y agregar un modelo GLTF a la escena
  private loadGLTFModel(fileName: string): void {
    const loader = new GLTFLoader();
    const path = `assets/models/${fileName}`;

    loader.load(
      path,
      (gltf) => {
        const model = gltf.scene; // El modelo cargado
        this.scene.add(model); // Agregar el modelo a la escena
        console.log('Modelo cargado correctamente:', gltf);
        // Ajustar posición y escala del modelo para que ocupe el espacio total de la cámara

        this.fitToCamera(model, this.camera);
        // Ocultar la pantalla de carga una vez que el modelo se haya cargado
        this.isSceneLoaded = true;
      },
      (xhr) => {
        // Progreso de la carga (opcional)
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
      },
      (error) => {
        // Manejo de errores en caso de que falle la carga (opcional)
        console.error('Error loading GLTF model:', error);
      }
    );
  }
}
