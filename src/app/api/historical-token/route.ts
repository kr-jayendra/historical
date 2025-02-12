export async function GET(request: Request) {
  try {
    const urls = new URL(request.url);
    console.log("🚀 ~ GET ~ urls 4:", urls);
    // const url = `https://app.geckoterminal.com/api/p1/candlesticks/${historicalChartId}?resolution=${historicalTimeRange.resolution}&from_timestamp=${from}&to_timestamp=${now}&for_update=false&count_back=${historicalTimeRange.count_back}&currency=usd&is_inverted=${isInverted}`;
    const url =
      "https://app.geckoterminal.com/api/p1/world-chain/pools/0x610e319b3a3ab56a0ed5562927d37c233774ba39?include=pairs";

    console.log("🚀 ~ POST ~ url: 28", url);
    const response = await fetch(url);

    const jsonData = await response.json();
    console.log("🚀 ~ GET ~ jsonData: 34", jsonData);

    // const historicalPrices = jsonData.data.map(
    //   (item: { dt: string; h: number }) => ({
    //     time: formatChartTime(item.dt, timeRange),
    //     value: isNaN(item.h) ? 0 : Number(item.h.toFixed(decimals))
    //   })
    // );

    return Response.json({
      success: true,
      data: jsonData,
    });
  } catch (error) {
    return Response.json({
      success: false,
      data: [],
      error: error || "something went wrong",
    });
  }
}
