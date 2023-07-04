import React, { useEffect } from 'react';
import * as THREE from 'three';
import favicon from '../../../public/favicon.ico';

const NavbarLogo = () => {
  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(50, 1, 1, 1000);
    camera.position.z = 20;

    const canvas = document.getElementById('navbarLogo');
    const navbarContainer = document.getElementById('navbarLogoContainer');

    if (!canvas || !navbarContainer) {
      console.error('Missing required elements');
      return;
    }

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      canvas,
      antialias: true,
    });
    renderer.setSize(50, 50);
    navbarContainer.append(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    ambientLight.castShadow = true;
    scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xffffff, 1);
    spotLight.castShadow = true;
    spotLight.position.set(0, 64, 32);
    scene.add(spotLight);

    const sphereGeometry = new THREE.SphereGeometry(8, 32, 32);
    const texture = new THREE.TextureLoader().load(favicon);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;

    texture.repeat.set(2, 1);

    const sphereMaterial = new THREE.MeshBasicMaterial({ map: texture });

    const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphereMesh);

    const animate = () => {
      sphereMesh.rotation.y += 0.015;

      renderer.render(scene, camera);
      window.requestAnimationFrame(animate);
    };

    animate();
  });

  return <canvas id="navbarLogo" />;
};

export default NavbarLogo;
