import { act, fireEvent, render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  window.location.hash = "#/";
  window.scrollTo = jest.fn();
});

test('contacto conserva la estructura y prepara el mensaje con los datos capturados', () => {
  window.location.hash = '#/contacto';
  const open = jest.spyOn(window, 'open').mockImplementation(() => null);
  render(<App />);
  expect(screen.getByRole('banner')).toBeInTheDocument();
  expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  fireEvent.change(screen.getByLabelText('Nombre completo *'), { target: { value: 'Ana López' } });
  fireEvent.change(screen.getByLabelText('Correo electrónico *'), { target: { value: 'ana@example.com' } });
  fireEvent.change(screen.getByLabelText('Asunto *'), { target: { value: 'Curso de francés' } });
  fireEvent.change(screen.getByLabelText('Mensaje *'), { target: { value: 'Quisiera conocer los horarios.' } });
  fireEvent.click(screen.getByRole('button', { name: 'Continuar en WhatsApp' }));
  const url = new URL(open.mock.calls[0][0]);
  expect(url.pathname).toBe('/527225720866');
  expect(url.searchParams.get('text')).toContain('Nombre: Ana López');
  expect(url.searchParams.get('text')).toContain('Quisiera conocer los horarios.');
  expect(screen.getByRole('status')).toHaveTextContent('revisar y enviar');
  open.mockRestore();
});

test('muestra la portada y el hipervínculo Sobre nosotros', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: 'Institución Montreal' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Sobre nosotros' })).toHaveAttribute('href', '#/sobre-nosotros');
});

test('cambia de página y conserva el encabezado y el pie', () => {
  render(<App />);
  const encabezado = screen.getByRole('banner');
  const pie = screen.getByRole('contentinfo');
  act(() => {
    window.location.hash = '#/sobre-nosotros';
    window.dispatchEvent(new Event('hashchange'));
  });
  expect(screen.getByRole('heading', { name: 'Sobre nosotros' })).toBeInTheDocument();
  expect(screen.getByText(/un espacio de educación y capacitación/)).toBeInTheDocument();
  expect(screen.getByRole('banner')).toBe(encabezado);
  expect(screen.getByRole('contentinfo')).toBe(pie);
  expect(screen.getByRole('link', { name: 'Sobre nosotros' })).toHaveAttribute('aria-current', 'page');
  act(() => {
    window.location.hash = '#/';
    window.dispatchEvent(new Event('hashchange'));
  });
  expect(screen.getByRole('heading', { name: 'Institución Montreal' })).toBeInTheDocument();
});
