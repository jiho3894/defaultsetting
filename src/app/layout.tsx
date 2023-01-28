import "@/styles/globals.css";
import ReactQueryWrapper from "./ReactQueryWrapper";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head />
      <body>
        <ReactQueryWrapper>{children}</ReactQueryWrapper>
      </body>
    </html>
  );
};

export default RootLayout;
