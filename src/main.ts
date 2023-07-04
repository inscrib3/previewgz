import { decompressSync } from "fflate";

const params = new URLSearchParams(window.location.search);

fetch(params.get('q') || '/content/c4c3e921da77f2a5bf7285e7e92d813ce5a5f6ecc2f4ffe99f8ad8191183a225i0').then(async (res) => {
  const buf = await res.arrayBuffer();
  console.log(buf);
  document.write(new TextDecoder().decode(decompressSync(new Uint8Array(buf))));
  document.close();
}).catch((err) => console.error(err));