import { decompressSync } from "fflate";

const params = new URLSearchParams(window.location.search);

fetch(params.get('q') || '/abc123').then(async (res) => {
  const buf = await res.arrayBuffer();
  console.log(buf);
  document.write(new TextDecoder().decode(decompressSync(new Uint8Array(buf))));
  document.close();
}).catch((err) => console.error(err));