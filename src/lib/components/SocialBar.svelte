<script>
    import IconMedium from 'virtual:icons/fa-brands/medium';
    import IconGithub from 'virtual:icons/fa-brands/github';
    import IconLinkedIn from 'virtual:icons/fa-brands/linkedin';
    import IconTwitter from 'virtual:icons/fa-brands/twitter';
    import IconEmail from 'virtual:icons/fa-solid/envelope';
    import IconBookmark from 'virtual:icons/fa-solid/bookmark';

    let links = [
        { name: "Github", href: "https://github.com/estaudere", icon: IconGithub },
        { name: "LinkedIn", href: "https://linkedin.com/in/nehadesaraju", icon: IconLinkedIn },
        { name: "Medium", href: "https://medium.com/@nehadesaraju", icon: IconMedium},
        { name: "Twitter", href: "https://twitter.com/nehadesaraju", icon: IconTwitter },
        { name: "Curius", href: "https://curius.app/nehadesaraju", icon: IconBookmark },
        { name: "Email", href: "mailto:neha.desaraju@gmail.com", icon: IconEmail }
    ]

    export let position = "right";
    let positionClass = position === "right" ? "place-content-end" : "place-content-start";
</script>

<div class="flex flex-wrap flex-row w-full {positionClass} pr-5 mt-12">
    {#each links as link (link.name)}
        <a 
            class="flex items-center ml-2" 
            href={link.href} 
            target="_blank" 
            rel="noopener noreferrer"
        >
            <svelte:component 
                this={link.icon} 
                class="text-slate-500 text-sm hover:text-slate-900 transition-colors" 
            />
        </a>
    {/each}
</div>