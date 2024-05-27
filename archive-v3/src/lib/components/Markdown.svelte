<script>
    import { marked } from 'marked';

    export let source;

    marked.use({
        renderer: {
            link(href, title, text) {
                let out = `<a rel="external" href="${encodeURI(href)}" class="link"`;
                if (title) {
                out += ' title="' + title + '"';
                }
                out += ">" + text + "</a>";
                return out;
            },
        },
    });

    $: html = marked.parse(source, {
        smartLists: true,
        smartypants: true,
    });
</script>

<div class="md-output">
    {@html html}
</div>

<style lang="postcss">
    .md-output :global(p) {
        @apply mb-4;
    }

    .md-output :global(strong) {
        @apply font-semibold;
    }

    .md-output :global(code) {
        @apply text-[95%];
    }

    .md-output :global(.link) {
        @apply underline decoration-gray-500 underline-offset-2 hover:decoration-current;
    }
</style>