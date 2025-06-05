async function fetchLatestBlock() {
  // 模拟数据
  const latest = {
    height: 123456,
    hash: "0xabc123def456...",
    timestamp: Math.floor(Date.now() / 1000),
    tx_count: 42
  };

  const blockHtml = `
    <p>区块高度：${latest.height}</p>
    <p>哈希：${latest.hash}</p>
    <p>时间戳：${new Date(latest.timestamp * 1000).toLocaleString()}</p>
    <p>交易数：${latest.tx_count}</p>
  `;

  document.getElementById("blockInfo").innerHTML = blockHtml;
}

fetchLatestBlock();
function drawTransactionChart() {
  const ctx = document.getElementById('txChart').getContext('2d');

  const chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['6/1', '6/2', '6/3', '6/4', '6/5', '6/6'],
      datasets: [{
        label: '每日交易数',
        data: [120, 200, 150, 300, 250, 380],
        borderWidth: 1
      }]
    },
    options: {
      plugins: {
        legend: {
          labels: {
            color: '#fff'
          }
        }
      },
      scales: {
        x: {
          ticks: { color: '#ccc' }
        },
        y: {
          ticks: { color: '#ccc' },
          beginAtZero: true
        }
      }
    }
  });
}

drawTransactionChart();
