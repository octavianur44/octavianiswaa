import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Order() {
  const navigate = useNavigate();

  const [cartItems] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [catatan, setCatatan] = useState("");

  const totalHarga = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const buatPesanan = (e) => {
    e.preventDefault();

    if (!nama || !alamat) {
      alert("Nama dan alamat wajib diisi!");
      return;
    }

    const order = {
      id: Date.now(),
      nama,
      alamat,
      catatan,
      items: cartItems,
      total: totalHarga,
      status: "Menunggu Pembayaran",
    };

    localStorage.setItem("order", JSON.stringify(order));

    alert("Pesanan berhasil dibuat! 🎉");

    // Setelah pesanan dibuat, lanjut ke halaman pembayaran
    navigate("/payment");
  };

  if (cartItems.length === 0) {
    return (
      <div style={{ maxWidth: "900px", margin: "50px auto", padding: "20px" }}>
        <h1>📦 Pesanan</h1>
        <p>Keranjang kamu masih kosong.</p>

        <button onClick={() => navigate("/produk")}>
          ← Kembali Belanja
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "900px", margin: "40px auto", padding: "20px" }}>
      <h1 style={{ marginBottom: "30px" }}>📦 Detail Pesanan</h1>

      {/* Produk */}
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "15px",
          marginBottom: "20px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        }}
      >
        <h2>Produk yang Dibeli</h2>

        {cartItems.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "15px 0",
              borderBottom: "1px solid #eee",
            }}
          >
            <div>
              <strong>{item.name}</strong>
              <p style={{ margin: "5px 0" }}>
                {item.quantity} × Rp{" "}
                {item.price.toLocaleString("id-ID")}
              </p>
            </div>

            <strong>
              Rp{" "}
              {(item.price * item.quantity).toLocaleString("id-ID")}
            </strong>
          </div>
        ))}

        <h2 style={{ textAlign: "right", marginTop: "20px" }}>
          Total: Rp {totalHarga.toLocaleString("id-ID")}
        </h2>
      </div>

      {/* Form pembeli */}
      <form
        onSubmit={buatPesanan}
        style={{
          background: "#f5f7f2",
          padding: "25px",
          borderRadius: "15px",
        }}
      >
        <h2>Data Pemesan</h2>

        <div style={{ marginBottom: "15px" }}>
          <label>Nama</label>
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            placeholder="Masukkan nama"
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "7px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              boxSizing: "border-box",
            }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Alamat</label>
          <textarea
            value={alamat}
            onChange={(e) => setAlamat(e.target.value)}
            placeholder="Masukkan alamat pengiriman"
            rows="4"
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "7px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              boxSizing: "border-box",
            }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label>Catatan (opsional)</label>
          <textarea
            value={catatan}
            onChange={(e) => setCatatan(e.target.value)}
            placeholder="Contoh: jangan terlalu pedas"
            rows="3"
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "7px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              boxSizing: "border-box",
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            background: "#75866a",
            color: "white",
            border: "none",
            padding: "14px",
            borderRadius: "10px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Buat Pesanan →
        </button>
      </form>
    </div>
  );
}

export default Order;