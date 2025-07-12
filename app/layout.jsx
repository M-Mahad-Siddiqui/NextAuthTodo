import './globals.css';

export const metadata = {
  title: 'Todo App - Organize Your Life',
  description: 'A modern todo app with authentication to help you stay organized and productive.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}