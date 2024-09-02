import { FC } from 'react';

export const Header: FC = () => (
  <header
    className="sticky top-0 left-0 right-0 w-full h-16 flex justify-between items-center px-6 z-10 bg-gradient-to-r from-8% t0-53% from-[#e80537] to-[#e66900]"
    data-testid="Header"
  >
    <div className="container mx-auto">
      <a href="/">
        <img
          src="./img/caju-logo.svg"
          alt="Caju Front Teste"
          className="bg-white rounded-md px-2 py-1 h-14"
        />
      </a>
    </div>
  </header>
);
