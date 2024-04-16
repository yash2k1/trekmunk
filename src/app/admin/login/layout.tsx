import React from "react";
export default function RootLayout({
  children,
}:

Readonly<{
  children: React.ReactNode;
}>) {
 
    return (
      <div className="min-h-[100svh] flex items-center justify-center ring-3">
        {children}
      </div>
    );
  

}
