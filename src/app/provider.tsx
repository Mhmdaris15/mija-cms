// app/providers.tsx
"use client";

import { NextUIProvider, Progress } from "@nextui-org/react";
import { useRouter, usePathname } from "next/navigation";
import React from "react";
import { IconContext } from "react-icons";

export function Providers({ children }: { children: React.ReactNode }) {
	const [progressValue, setProgressValue] = React.useState(0);
	const [previousPathname, setPreviousPathname] = React.useState("");

	const router = useRouter();

	const pathname = usePathname();

	React.useEffect(() => {
		if (pathname !== previousPathname) {
			setProgressValue(0);
			setPreviousPathname(pathname);
		} else {
			setProgressValue((prev) => prev + 10);
		}
		console.log("pathname", pathname);
	}, [pathname]);

	return (
		<NextUIProvider>
			<IconContext.Provider
				value={{
					size: "2em",
					className: "h-6 w-6",
				}}>
				<Progress size="sm" aria-label="Loading..." value={progressValue} />
				{children}
			</IconContext.Provider>
		</NextUIProvider>
	);
}
