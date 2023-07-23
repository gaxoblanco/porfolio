import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { HeadComponent } from '../head/head.component';
import { SearchService } from 'src/app/search-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  template: `
    <canvas #canvasElement></canvas>
  `,
})
export class HomeComponent implements OnInit {
  @ViewChild('canvasElement', { static: true }) canvasElementRef!: ElementRef<HTMLCanvasElement>;

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private controls!: OrbitControls;

  constructor(private http: HttpClient, private searchService: SearchService
    ) {}

  ngOnInit(): void {
    // console.log('search', this.searchService.searchValue.subscribe);
    this.setupScene();
    // Suscribirse al observable para obtener el valor
    this.searchService.searchValue.subscribe((search: string) => {

      // Si el texto es un string vacío, mostrar "hola" en su lugar
      const textToDisplay = search === '' ? 'gaxoblanco' : search;


      console.log('search', search);
      this.loadFontAndCreateText(textToDisplay);
    });
    this.setupOrbitControls();
    this.createElements();
    this.startAnimation();
  }

  private setupScene(): void {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvasElementRef.nativeElement });
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.camera.updateMatrixWorld();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }

  private loadFontAndCreateText(text: string): void {
    // Eliminar cualquier texto existente en la escena
  const existingText = this.scene.getObjectByName('text');
  if (existingText) {
    this.scene.remove(existingText);
  }

    const fontPath = '../../assets/fonts/helvetiker_regular.typeface.json';
    this.http.get(fontPath).subscribe(
      (fontData: any) => {
        const font = new FontLoader().parse(fontData);
        const material2 = new THREE.MeshBasicMaterial({ color: 0xffff00 });
        const textGeometry = new TextGeometry(text, {
          font: font,
          size: 0.5,
          height: 0.2,
          curveSegments: 12,
          bevelEnabled: true,
          bevelThickness: 0.03,
          bevelSize: 0.02,
          bevelOffset: 0,
          bevelSegments: 5
        });
        textGeometry.center();
        const meshText = new THREE.Mesh(textGeometry, material2);
        this.scene.add(meshText);
        this.camera.position.z = 5;

        // Asignar un nombre único al texto para poder encontrarlo y eliminarlo en el futuro
        meshText.name = 'text';
      },
      (error) => {
        console.error('Error loading font:', error);
      }
    );
  }

  private setupOrbitControls(): void {
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
  }

  private createElements(): void {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

    for (let i = 0; i < 100; i++) {
      const cube = new THREE.Mesh(geometry, material);
      cube.position.x = (Math.random() - 0.5) * 20;
      cube.position.y = (Math.random() - 0.5) * 20;
      cube.position.z = (Math.random() - 0.5) * 20;
      cube.rotation.x = Math.random() * Math.PI;
      cube.rotation.y = Math.random() * Math.PI;
      const scale = Math.random();
      cube.scale.set(scale, scale, scale);

      this.scene.add(cube);
    }
  }

  private startAnimation(): void {
    const animate = () => {
      requestAnimationFrame(animate);
      // Add animation logic here if needed.
      this.renderer.render(this.scene, this.camera);
    };
    animate();
  }
}
