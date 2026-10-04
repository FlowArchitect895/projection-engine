import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  studioHost: 'projection-engine',
  api: {
    projectId: '358bqlwi',
    dataset: 'production'
  },
  deployment: {
    appId: 'cm64ii5oqyowrp4t0uryex1c',
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
  },
})
