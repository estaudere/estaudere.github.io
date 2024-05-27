<script>
    export let data;

    console.log(data);
</script>

<div>
    <article>
        <header>
        <h1>{data.post.title}</h1>
        </header>
        <!-- render the post -->
        <div>
        <svelte:component this={data.component} />
        </div>
    </article>
</div>