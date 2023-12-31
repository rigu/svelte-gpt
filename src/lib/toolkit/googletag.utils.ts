export const useAds = (
  networkCode: string,
  unitCode: string,
  size: googletag.GeneralSize = [],
  sizeMapping: { [key: string]: googletag.GeneralSize } = {},
  containerId: string = 'svelte-gpt-ad-slot'
) => {
    if (typeof window !== 'undefined') {
        const {googletag} = window;
        googletag.cmd.push(function () {
            const adMapping = googletag.sizeMapping();
            Object.keys(sizeMapping).forEach((breakpoint) => {
                adMapping.addSize([parseInt(breakpoint), 0], sizeMapping[breakpoint]);
            });
            const builtMapping = adMapping.build() as googletag.SizeMappingArray;
            const adSlot = googletag.defineSlot(`/${networkCode}/${unitCode}`, size, `${containerId}-${unitCode}`) as googletag.Slot;

            adSlot.defineSizeMapping(builtMapping).addService(googletag.pubads());
            googletag.enableServices();
        });

        googletag.cmd.push(function () {
            googletag.display(`${containerId}-${unitCode}`);
        });
    }
};
