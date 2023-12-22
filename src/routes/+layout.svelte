<script>
    import '../app.css'
    import Header from '$lib/components/Header.svelte'
    import SocialBar from '$lib/components/SocialBar.svelte'
</script>

<Header />

<div class="extra-margin">
    <slot />
    <SocialBar />
</div>
<div class="h-24"></div>