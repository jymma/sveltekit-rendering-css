/** @type {import('../../../.svelte-kit/types/src/routes/style/$types').RequestHandler} */
export async function GET() {
    return new Response(
        'body { background-color: green; }', 
        {
            headers: {
                'Content-Type': 'text/css'
            },
      }
    )
}
