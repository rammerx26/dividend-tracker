import React, { useState } from "react";

function App() {
  const [stocks, setStocks] = useState([]);
  const [form, setForm] = useState({
    symbol: "",
    myStock: ""
  });

  // Placeholder for fetching live data in the future
  const getLiveStockData = (symbol) => {
    // Here you will fetch price, ex-dividend date, payment date, and dividend per share
    // For now, return placeholder data
    return {
      price: "Loading...",
      exDividend: "Loading...",
      paymentDate: "Loading...",
      dividend: "Loading..."
    };
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.symbol) return;
    setStocks([
      ...stocks,
      {
        symbol: form.symbol.toUpperCase(),
        myStock: form.myStock,
        ...getLiveStockData(form.symbol)
      }
    ]);
    setForm({ symbol: "", myStock: "" });
  };

  return (
    <div style={{ maxWidth: 800, margin: "auto", padding: 20 }}>
      <h1>Stock Dividend Tracker</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
        <input
          type="text"
          name="symbol"
          placeholder="Stock Symbol (e.g., AAPL)"
          value={form.symbol}
          onChange={handleChange}
          required
          style={{ marginRight: 10 }}
        />
        <input
          type="number"
          name="myStock"
          placeholder="My Stock (e.g., 10)"
          value={form.myStock}
          onChange={handleChange}
          style={{ marginRight: 10 }}
        />
        <button type="submit">Add Stock</button>
      </form>
      <table border="1" cellPadding="6" width="100%">
        <thead>
          <tr>
            <th>Stock Symbol</th>
            <th>Live Price</th>
            <th>Ex-Dividend Date</th>
            <th>Payment Date</th>
            <th>Dividend per Share</th>
            <th>My Stock</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock, idx) => (
            <tr key={idx}>
              <td>{stock.symbol}</td>
              <td>{stock.price}</td>
              <td>{stock.exDividend}</td>
              <td>{stock.paymentDate}</td>
              <td>{stock.dividend}</td>
              <td>{stock.myStock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
