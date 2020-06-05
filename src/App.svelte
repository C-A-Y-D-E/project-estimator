<script>
  import Form from "./Form.svelte";
  import Table from "./Table.svelte";
  let item;
  let price;
  let id;

  function edit(event) {
    // item = event.detail.item;
    // price = event.detail.price;
    // id = event.detail.id;

    ({ item, price, id } = event.detail);
  }
</script>

<style>
  main {
    align-items: center;
    width: 80%;
    flex: 1;
    margin: 0 auto;
  }
</style>

<main>
  <h1>Project Estimator</h1>
  <Form {item} {price} {id} />
  <Table on:edit={edit} />
</main>
