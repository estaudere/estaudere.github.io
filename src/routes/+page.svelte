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

    let Icon = "";
</script>

<p class="mb-5 text-lg">
    I'm currently an undergrad at UT Austin studying computer science with a focus on
    machine learning and its applications in everything from autonomous systems to large generative
    models.
</p>
<p class="mb-5 text-lg">
    In the past, I've worked on a variety of research projects ranging from differentiable
    retrieval systems to language agents to foundation multimodal models, as well as 
    software engineering stints at places like Citibank. I'm drawn to complex systems — systems 
    which are more than the sum of their parts — and building systems that can navigate such spaces.
</p>
<p class="mb-5 text-lg">
    I'm really just a curious person who likes to learn and build things. I'm also helping to
    cultivate a community of creative thinkers on campus with 
    <a class="link" href="https://txmomentum.org">Texas Momentum</a> and 
    Texas Venture Group (coming soon!).
</p>
<p class="text-sm text-slate-500 mt-10 hidden">
    I also write — in a past life, I did comms and journalism (you can find some of my published 
    pieces scattered about the internet as well as quotes from me in places like The New Republic 
    and Reuters), and I wrote poems, fiction, and prose. Now, I mostly write about tech and the
    future.
</p>

<div class="flex flex-wrap flex-row w-full place-content-end pr-5 mt-12">
    {#each links as link (link.name)}
        <a class="flex items-center ml-2" href={link.href} target="_blank" rel="noopener noreferrer">
            <svelte:component this={link.icon} class="text-slate-500 text-sm hover:text-slate-900 transition-colors" />
        </a>
    {/each}
</div>

<style lang="postcss">
    .link {
        @apply underline underline-offset-4 decoration-2 text-gray-700 decoration-gray-400;
        @apply hover:text-current hover:decoration-gray-600 transition-colors;
    }
</style>