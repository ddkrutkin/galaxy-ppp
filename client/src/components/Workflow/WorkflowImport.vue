<script setup>
import FromFileOrUrl from "./Import/FromFileOrUrl";
import TrsImport from "./Import/TrsImport";
import TrsSearch from "./Import/TrsSearch";
</script>

<template>
    <section>
        <h1 class="h-lg">Import workflow</h1>
        <b-tabs fill>
            <b-tab title-link-class="workflow-import-file-link" title="Archived file or url" active>
                <FromFileOrUrl />
            </b-tab>
            <b-tab title-link-class="workflow-import-trs-search-link" title="GA4GH servers">
                <div class="mt-4">
                    <h2 class="h-sm">Import a Workflow from Configured GA4GH Tool Registry Servers (e.g. Dockstore)</h2>
                    <TrsSearch />
                </div>
            </b-tab>
            <b-tab title-link-class="workflow-import-trs-id-link" title="TRS ID">
                <div class="mt-4">
                    <h2 class="h-sm">Import from a TRS ID</h2>
                    <TrsImport />
                </div>
            </b-tab>
        </b-tabs>
    </section>
</template>
