// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Error {}
	// interface Locals {}
	// interface PageData {}
	// interface PageState {}
	interface Platform {
		env: {
			// Public environment variables here...
		}
		context: {
			waitUntil(promise: Promise<any>): void;
		}
		caches: CacheStorage & { default: Cache }
	}
}
