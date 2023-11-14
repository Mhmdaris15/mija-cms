// app/providers.tsx
"use client";

import { NextUIProvider } from "@nextui-org/react";
import { IconContext } from "react-icons";

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<NextUIProvider>
			<IconContext.Provider
				value={{
					size: "2em",
					className: "h-6 w-6",
				}}>
				{children}
			</IconContext.Provider>
		</NextUIProvider>
	);
}
