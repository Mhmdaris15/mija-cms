// app/providers.tsx
"use client";

import { NextUIProvider, Progress } from "@nextui-org/react";
import { useRouter, usePathname } from "next/navigation";
import { Router } from "next/router";
import React from "react";
import { IconContext } from "react-icons";

export function Providers({ children }: { children: React.ReactNode }) {
	const [progress, setProgress] = React.useState(false);
	const [progressValue, setProgressValue] = React.useState(0);

	const pathname = usePathname();

	const handleStart = (url: string) => {
		console.log("handleStart", url);
		if (url !== pathname) {
			setProgress(true);
			const interval = setInterval(() => {
				setProgressValue((prev) => {
					if (prev >= 100) {
						clearInterval(interval);
						return 100; // Maintain full progress for completed loading
					}
					return prev + 1;
				});
			}, 500);
		}
	};

	const handleComplete = (url: string) => {
		console.log("handleComplete", url);
		if (url === pathname) {
			setProgress(false);
		}
	};

	Router.events.on("routeChangeStart", handleStart);
	Router.events.on("routeChangeComplete", handleComplete);
	Router.events.on("routeChangeError", handleComplete);

	return (
		<NextUIProvider>
			<IconContext.Provider
				value={{
					size: "2em",
					className: "h-6 w-6",
				}}>
				{progress && (
					<Progress size="lg" aria-label="Loading..." value={progressValue} />
				)}
				{children}
			</IconContext.Provider>
		</NextUIProvider>
	);
}
