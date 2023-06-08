<template>
    <div>
        test
    </div>
</template>

<script>
import { Client } from '@notionhq/client';
const notion = new Client({auth: 'secret_voHoNdOnBI9Cc3dfRsrLwDzTm3yLygIV8bjfYUrasRs'});

export default {
  name: 'HomePage',
  async asyncData({ app }) {
      const data = await notion.databases.query({
            database_id: "08c5dea32e0b4f468a98bd419bc54aaa",
        })
      return {
        posts: data.results
      }
    }
}
</script>
