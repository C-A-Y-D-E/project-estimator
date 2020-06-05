<script>
  import { material } from "./store";

  export let id;
  export let price;
  export let item = "";
  $: mode = id ? "edit" : "add";

  $: cantAdd = item !== "" && price > 0;

  function submit() {
    if (!cantAdd) {
      return;
    }
    if (mode === "add") {
      material.add(item, price, id);
    }

    if (mode === "edit") {
      material.updateMaterial(item, price, id);
    }

    item = "";
    price = "";
  }

  function cancel() {
    item = "";
    price = "";
    mode = "add";
  }
</script>

<style>
  button {
    margin-left: 20px;
  }
</style>

<form on:submit|preventDefault={submit}>
  <fieldset>
    <label for="item">Material:</label>
    <input type="text" placeholder="Wood, Glu, Etc" bind:value={item} />
    <label for="price">Price:</label>
    <input
      type="number"
      min="0"
      step="any"
      placeholder="price"
      bind:value={price} />
  </fieldset>
  <button disabled={!cantAdd} class="float-right" type="submit">{mode}</button>
  {#if mode === 'edit'}
    <button on:click={cancel} class="float-right" type="button">Cancel</button>
  {/if}
</form>
