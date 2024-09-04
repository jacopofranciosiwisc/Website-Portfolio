'use client';
import ThemeContextProvider from './theme_context';
import ComponentWrapper from './component_wrapper';

export default function ContextProviders({ children }) {
	return (
		<ThemeContextProvider>
			<ComponentWrapper>{children}</ComponentWrapper>
		</ThemeContextProvider>
	);
}
