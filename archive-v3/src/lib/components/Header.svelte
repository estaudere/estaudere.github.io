<script>
    import { page } from '$app/stores';
    const links = [
        { name: 'projects', href: '/projects' },
        { name: 'cv', href: '/assets/CV.pdf' },
    ];

    let pageTitle = '';

    $: {
        const link = links.find((link) => link.href === $page.route.id);
        pageTitle = link ? link.name : '';
    }
</script>

<div class="h-24"></div>
<div class="flex flex-row mt-12 extra-margin mb-10">
    <h1 class="text-3xl font-bold">
        <a href="/">Neha Desaraju</a>
        {#if pageTitle != ''}
            <span class="font-light text-gray-500"> — {pageTitle}</span>
        {/if}
    </h1>
    <div class="flex flex-row ml-auto text-sm items-center">
        {#each links as link}
            <a
                class="text-xl text-bold mr-4 text-gray-500 underline underline-offset-4 decoration-transparent hover:text-current transition-colors hover:decoration-current"
                href={link.href}
            >
                {link.name}
            </a>
        {/each}
    </div>
</div>
<div class="h-10"></div>