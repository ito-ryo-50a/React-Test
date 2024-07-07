import React from "react";

const Pattern1StructuredSlide = () => {
  const plans = [
    {
      rank: 1,
      company: "日本通信SIM",
      basicPlan: "合理的シンプル290プラン",
      basicPrice: 290,
      data: "1GB",
      callOption: "かけ放題オプション",
      callPrice: 1600,
      totalPrice: 1890,
      features: "月70分の無料通話付帯",
      rationale: "最安値で条件を満たし、無料通話分を含む",
    },
    {
      rank: 2,
      company: "BIGLOBE biz.",
      basicPlan: "プランS",
      basicPrice: 858,
      data: "1GB",
      callOption: "10分かけ放題",
      callPrice: 913,
      totalPrice: 1771,
      features: "知名度が高く、幅広いプラン展開",
      rationale: "2番目に安価で、10分/回の条件に最適",
    },
    {
      rank: 3,
      company: "UQモバイル",
      basicPlan: "ミニミニプラン",
      basicPrice: 2365,
      data: "4GB",
      callOption: "通話放題",
      callPrice: 1980,
      totalPrice: 4345,
      features: "auの回線で安定した通信",
      rationale: "データ容量多めだが、完全なかけ放題を提供",
    },
  ];

  return (
    <div className="w-[297mm] h-[210mm] bg-white p-[50px] flex flex-col">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        携帯電話法人契約プラン比較（パターン1）
      </h2>

      <div className="bg-blue-100 p-3 rounded-lg mb-4 text-sm">
        <p>
          <strong>比較条件:</strong> データ通信容量: 1GB～3GB / 想定通話時間:
          5時間/月、1時間/週、10分/回 / 契約台数: 1台
        </p>
      </div>

      <div className="flex-grow">
        <table className="w-full text-sm">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2">順位</th>
              <th className="p-2">会社名</th>
              <th className="p-2">基本プラン</th>
              <th className="p-2">データ容量</th>
              <th className="p-2">基本料金</th>
              <th className="p-2">通話オプション</th>
              <th className="p-2">オプション料金</th>
              <th className="p-2">合計金額</th>
              <th className="p-2">特徴</th>
              <th className="p-2">選定根拠</th>
            </tr>
          </thead>
          <tbody>
            {plans.map((plan) => (
              <tr key={plan.company} className="border-b">
                <td className="p-2 font-bold">{plan.rank}位</td>
                <td className="p-2">{plan.company}</td>
                <td className="p-2">{plan.basicPlan}</td>
                <td className="p-2">{plan.data}</td>
                <td className="p-2">{plan.basicPrice.toLocaleString()}円</td>
                <td className="p-2">{plan.callOption}</td>
                <td className="p-2">{plan.callPrice.toLocaleString()}円</td>
                <td className="p-2 font-bold">
                  {plan.totalPrice.toLocaleString()}円
                </td>
                <td className="p-2">{plan.features}</td>
                <td className="p-2">{plan.rationale}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 text-sm text-gray-600 bg-yellow-100 p-3 rounded-lg">
        <p>
          <strong>注意事項:</strong>{" "}
          価格は税込です。実際の契約時には、詳細な契約条件やサービス品質、カバーエリアも考慮してください。法人契約特有の割引や特典が適用される可能性があるため、各社に直接確認することをおすすめします。
        </p>
      </div>
    </div>
  );
};

export default Pattern1StructuredSlide;
