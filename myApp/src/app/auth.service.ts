import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private usuarios = [
    { email: 'usuario@example.com', password: 'password123' },
    { email: 'admin@example.com', password: 'adminpass' },
  ];

  private loggedInUser: string | null = null;
  
  // Crear el Subject para emitir cambios de estado
  cambioDeEstado = new Subject<void>();

  register(email: string, password: string): boolean {
    const usuarioExistente = this.usuarios.find(user => user.email === email);
    
    if (usuarioExistente) {
      return false; // Usuario ya existe
    }

    this.usuarios.push({ email, password });
    return true; // Registro exitoso
  }

  login(email: string, password: string): 'success' | 'userNotFound' | 'incorrectPassword' {
    const usuario = this.usuarios.find(user => user.email === email);
    
    if (!usuario) {
      return 'userNotFound';
    }
    
    if (usuario.password !== password) {
      return 'incorrectPassword';
    }

    this.loggedInUser = email; // Aquí se actualiza el usuario que ha iniciado sesión
    this.cambioDeEstado.next(); // Emitir un evento de cambio de estado
    return 'success';
  }

  logout() {
    this.loggedInUser = null; // Aquí se borra el usuario que estaba logueado
    this.cambioDeEstado.next(); // Emitir un evento de cambio de estado
  }

  getLoggedInUser(): string | null {
    return this.loggedInUser; // Aquí se devuelve el usuario logueado
  }
}
