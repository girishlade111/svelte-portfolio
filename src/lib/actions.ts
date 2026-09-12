/** Custom Svelte action: scroll-reveal via IntersectionObserver. Usage: <div use:reveal> */
export function reveal(node: HTMLElement, delay = 0) {
	node.classList.add('reveal');
	node.style.transitionDelay = `${delay}ms`;
	const io = new IntersectionObserver(
		(entries) => entries.forEach((e) => { if (e.isIntersecting) { node.classList.add('in'); io.disconnect(); } }),
		{ threshold: 0.12 }
	);
	io.observe(node);
	return { destroy: () => io.disconnect() };
}
