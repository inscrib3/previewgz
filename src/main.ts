import { decompressSync } from "fflate";

const params = new URLSearchParams(window.location.search);

fetch(params.get('q') || '/content/b3615f06ff4964f4935b2b06734684dee914661e07975464651858ee8366eb26i0').then(async (res) => {
  const buf = await res.arrayBuffer();
  console.log(buf);
  document.write(new TextDecoder().decode(decompressSync(new Uint8Array(buf))));
  document.close();
}).catch((err) => console.error(err));