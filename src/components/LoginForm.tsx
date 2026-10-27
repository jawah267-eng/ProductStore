import React from 'react'
import { useRef } from 'react';

const LoginForm = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailRef.current?.value) emailRef.current?.focus();
    else if (!passwordRef.current?.value) passwordRef.current?.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={emailRef} type="email" />
      <input ref={passwordRef} type="password" />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm
