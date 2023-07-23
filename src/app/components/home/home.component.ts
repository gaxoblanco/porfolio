import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef } from '@angular/core';
import { BehaviorSubject, interval } from 'rxjs';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

import * as THREE from 'three';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  template: `
    <canvas #canvasElement></canvas>
  `
})
export class HomeComponent implements OnInit {
  @ViewChild('canvasElement', { static: true }) canvasElementRef!: ElementRef<HTMLCanvasElement>;

  constructor() {}

  ngOnInit(): void {
    // Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer(
      {canvas: this.canvasElementRef.nativeElement}
    );
    renderer.setSize(window.innerWidth, window.innerHeight);

    //reSizes fuction
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      camera.updateMatrixWorld();
      renderer.setSize(window.innerWidth, window.innerHeight,)
    })

    //geometry
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    // Rendering the scene
    function animate() {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    }
    animate();
  }




  activeEstady(){
  }
  isLogeado(){
   }
  disconect(){
  }

}
