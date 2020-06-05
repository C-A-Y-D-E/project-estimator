<script>
  import { material } from "./store.js";
  import { flip } from "svelte/animate";
  import { createEventDispatcher } from "svelte";
  const formater = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD"
  });
  const dispatch = createEventDispatcher();

  $: total = $material.reduce((prev, cur, index) => {
    prev = prev + cur.price;
    return prev;
  }, 0);

  function deleteMaterial(id) {
    material.set($material.filter(mat => mat.id !== id));
  }
</script>

<style>
  table {
    width: 100%;
  }

  .hover {
    cursor: pointer;
  }
</style>

<table class="primary">
  <thead>
    <tr>
      <th>Item</th>
      <th>Price</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
    {#each $material as mat (mat.id)}
      <tr>
        <td
          on:click={dispatch('edit', {
            id: mat.id,
            item: mat.item,
            price: mat.price
          })}>
          {mat.item}
        </td>
        <td>{formater.format(mat.price)}</td>
        <td>
          <i on:click={deleteMaterial(mat.id)} class="far fa-trash-alt hover" />
        </td>
      </tr>
    {/each}
  </tbody>
  <tfoot>
    <tr>
      <td>Total</td>
      <td colspan="2">{formater.format(total)}</td>
    </tr>
  </tfoot>
</table>
