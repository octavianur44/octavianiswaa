import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Payment() {
  const navigate = useNavigate();

  const [order] = useState(() => {
    return JSON.parse(localStorage.getItem("order")) || null;
  });

  const [metode, setMetode] = useState("");

  const pilihPembayaran = (e) => {
    e.preventDefault();

    if (!metode) {
      alert("Silakan pilih metode pembayaran!");
      return;
    }

    const updatedOrder = {
      ...order,
      paymentMethod: metode,
      paymentStatus: "Menunggu Pembayaran",
    };

    localStorage.setItem("order", JSON.stringify(updatedOrder));

    alert("Metode pembayaran berhasil dipilih! 🎉");

    navigate("/payment-success");
  };

  if (!order) {
    return (
      <div
        style={{
          maxWidth: "900px",
          margin: "50px auto",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <h1>💳 Pembayaran</h1>
        <p>Data pesanan tidak ditemukan.</p>

        <button
          onClick={() => navigate("/produk")}
          style={{
            background: "#75866a",
            color: "white",
            border: "none",
            padding: "12px 20px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          ← Kembali Belanja
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "20px",
      }}
    >
      <h1 style={{ marginBottom: "30px" }}>
        💳 Pembayaran
      </h1>

      {/* RINGKASAN PESANAN */}
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "15px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
          marginBottom: "20px",
        }}
      >
        <h2>Ringkasan Pesanan</h2>

        {order.items.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "12px 0",
              borderBottom: "1px solid #eee",
            }}
          >
            <span>
              {item.name} × {item.quantity}
            </span>

            <strong>
              Rp{" "}
              {(item.price * item.quantity).toLocaleString(
                "id-ID"
              )}
            </strong>
          </div>
        ))}

        <h2 style={{ textAlign: "right", marginTop: "20px" }}>
          Total: Rp {order.total.toLocaleString("id-ID")}
        </h2>
      </div>

      {/* DATA PEMESAN */}
      <div
        style={{
          background: "#f5f7f2",
          padding: "20px",
          borderRadius: "15px",
          marginBottom: "20px",
        }}
      >
        <h2>Data Pemesan</h2>

        <p>
          <strong>Nama:</strong> {order.nama}
        </p>

        <p>
          <strong>Alamat:</strong> {order.alamat}
        </p>

        {order.catatan && (
          <p>
            <strong>Catatan:</strong> {order.catatan}
          </p>
        )}
      </div>

      {/* METODE PEMBAYARAN */}
      <form
        onSubmit={pilihPembayaran}
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "15px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        }}
      >
        <h2>Pilih Metode Pembayaran</h2>

        <label
          style={{
            display: "block",
            padding: "15px",
            marginTop: "15px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          <input
            type="radio"
            name="payment"
            value="Transfer Bank"
            checked={metode === "Transfer Bank"}
            onChange={(e) => setMetode(e.target.value)}
          />{" "}
          🏦 Transfer Bank
        </label>

        <label
          style={{
            display: "block",
            padding: "15px",
            marginTop: "10px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          <input
            type="radio"
            name="payment"
            value="QRIS"
            checked={metode === "QRIS"}
            onChange={(e) => setMetode(e.target.value)}
          />{" "}
          📱 QRIS
        </label>

        <label
          style={{
            display: "block",
            padding: "15px",
            marginTop: "10px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          <input
            type="radio"
            name="payment"
            value="COD"
            checked={metode === "COD"}
            onChange={(e) => setMetode(e.target.value)}
          />{" "}
          💵 COD (Bayar di Tempat)
        </label>

        <button
          type="submit"
          style={{
            width: "100%",
            marginTop: "25px",
            background: "#75866a",
            color: "white",
            border: "none",
            padding: "14px",
            borderRadius: "10px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Konfirmasi Pembayaran →
        </button>
      </form>
    </div>
  );
}

export default Payment;