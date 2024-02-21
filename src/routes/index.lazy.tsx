import { Button } from "@/components/ui/button";
import { useCountStore } from "@/store/counter.store";
import { createLazyFileRoute } from "@tanstack/react-router";

function Landing() {
	const count = useCountStore((state) => state.count);
	const increment = useCountStore((state) => state.increment);

	return (
		<>
			<h1>Hello from the boilerplate</h1>
			<p>Counter: {count}</p>
			<Button
				size={"sm"}
				onClick={() => increment(1)}
			>
				Increment
			</Button>
		</>
	);
}

export const Route = createLazyFileRoute("/")({
	component: Landing,
});
