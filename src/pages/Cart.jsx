import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Cart() {
  const navigate = useNavigate();

  // Mengambil data cart dari localStorage
  const [cartItems, setCartItems] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  // Menambah jumlah produk
  const tambahJumlah = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Mengurangi jumlah produk
  const kurangJumlah = (id) => {
    const updatedCart = cartItems
      .map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Menghapus produk
  const hapusProduk = (id) => {
    const updatedCart = cartItems.filter(
      (item) => item.id !== id
    );

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Total harga
  const totalHarga = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Lanjut ke halaman Order
  const lanjutKePesanan = () => {
    if (cartItems.length === 0) {
      alert("Keranjang masih kosong!");
      return;
    }

    navigate("/order");
  };

  return (
    <div
      style={{
        maxWidth: "1100px",
        margin: "40px auto",
        padding: "20px",
      }}
    >
      <h1 style={{ marginBottom: "30px" }}>
        🛒 Keranjang Belanja
      </h1>

      {cartItems.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            padding: "60px 20px",
            background: "#f5f7f2",
            borderRadius: "15px",
          }}
        >
          <h2>Keranjang masih kosong</h2>
          <p>Yuk, pilih produk UMKM favoritmu!</p>

          <button
            onClick={() => navigate("/produk")}
            style={{
              marginTop: "15px",
              background: "#75866a",
              color: "white",
              border: "none",
              padding: "12px 20px",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            ← Belanja Sekarang
          </button>
        </div>
      ) : (
        <>
          <div
            style={{
              background: "white",
              borderRadius: "15px",
              padding: "20px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
            }}
          >
            {cartItems.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "20px 0",
                  borderBottom: "1px solid #eee",
                }}
              >
                <div>
                  <h3 style={{ margin: "0 0 8px" }}>
                    {item.name}
                  </h3>

                  <p style={{ margin: 0 }}>
                    Rp {item.price.toLocaleString("id-ID")}
                  </p>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <button
                    onClick={() => kurangJumlah(item.id)}
                    style={{
                      width: "35px",
                      height: "35px",
                      borderRadius: "8px",
                      border: "1px solid #ccc",
                      background: "white",
                      cursor: "pointer",
                    }}
                  >
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => tambahJumlah(item.id)}
                    style={{
                      width: "35px",
                      height: "35px",
                      borderRadius: "8px",
                      border: "none",
                      background: "#7d8d70",
                      color: "white",
                      cursor: "pointer",
                    }}
                  >
                    +
                  </button>

                  <button
                    onClick={() => hapusProduk(item.id)}
                    style={{
                      marginLeft: "15px",
                      border: "none",
                      background: "#eee",
                      padding: "8px 12px",
                      borderRadius: "8px",
                      cursor: "pointer",
                    }}
                  >
                    Hapus
                  </button>
                </div>

                <strong>
                  Rp{" "}
                  {(item.price * item.quantity).toLocaleString(
                    "id-ID"
                  )}
                </strong>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: "25px",
              padding: "25px",
              background: "#f5f7f2",
              borderRadius: "15px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <p style={{ margin: 0 }}>
                Total Pembayaran
              </p>

              <h2 style={{ margin: "5px 0" }}>
                Rp {totalHarga.toLocaleString("id-ID")}
              </h2>
            </div>

            <button
              onClick={lanjutKePesanan}
              style={{
                background: "#75866a",
                color: "white",
                border: "none",
                padding: "14px 25px",
                borderRadius: "10px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Lanjut ke Pesanan →
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;