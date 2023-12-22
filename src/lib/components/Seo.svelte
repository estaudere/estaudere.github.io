<script>
    export let title;
    export let ogTitle = title;
    export let description;
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={ogTitle} />
    <meta property="og:description" content={description} />
    <meta
        property="og:image"
        content="%sveltekit.assets%/card.png"
    />
    <meta name="twitter:card" content="summary_large_image" />
</svelte:head>