<script>
    import Markdown from '$lib/components/Markdown.svelte';
    import { formatTime } from '$lib/utils';

    export let data;
</script>

<h3 class="text-xl font-semibold mb-2">
    {data.title}
    <span class="text-base text-gray-500 font-normal">
        {formatTime("%B %Y", data.date)}
    </span>
</h3>

<Markdown source={data.content}/>