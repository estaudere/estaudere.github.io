<script>
    import Project from './Project.svelte';
    import Seo from '$lib/components/Seo.svelte';

    const projects = import.meta.glob('../../projects/*.md', {
        eager: true
    });

    // sort projects by date
    Object.keys(projects).sort((a, b) => {
        return projects[b].date - projects[a].date;
    });
</script>

<Seo
    title="Neha Desaraju — Projects"
    description="Some meaningful projects I've worked on recently."
/>

{#each Object.keys(projects) as id}
    <div class="mb-12">
        <Project data={projects[id]} />
    </div>
{/each}