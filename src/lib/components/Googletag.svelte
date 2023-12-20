<script lang="ts">
    import type { SlotSize, SlotSizeMapping } from '$lib/models/googletag.models';
    import { useAds } from '$lib/toolkit/googletag.utils';
    import { afterUpdate, beforeUpdate } from 'svelte';

    export let tagId: string;
    export let unitId: string;
    export let size: SlotSize = [];
    export let sizeMapping: SlotSizeMapping = {};
    export let containerId: string = 'svelte-gpt-ad-slot';
    export let maxHeight = 60;

    export let timeout = 300;

    afterUpdate(() => {
        setTimeout(() => {
            useAds(tagId, unitId, size, sizeMapping, containerId);
        }, timeout);
    });

    beforeUpdate(() => {
        // destroy all ad slots
        const { googletag } = window;
        googletag.cmd.push(function () {
            googletag.destroySlots();
        });
    });
</script>

<div class="svelte-gpt" {...$$props}>
    <div class="svelte-gpt-slot-wrapper" style:max-height={maxHeight}>
        <div id='{containerId}-{unitId}' class="svelte-gpt-slot" style:max-height={maxHeight}></div>
    </div>
</div>

<style>
    .svelte-gpt {
        display: var(--display, block);
        max-width: var(--max-width, 100%);
        overflow: var(--overflow, hidden);
        width: var(--width, 100%);
    }

    .svelte-gpt-slot-wrapper {
        display: var(--slot-wrapper-display, flex);
        justify-content: var(--slot-wrapper-justify-content, center);
        width: var(--slot-wrapper-width, 100%);
    }

    .svelte-gpt-slot {
        max-width: var(--slot-max-width, 100%);
    }
</style>
