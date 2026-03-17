interface ProductRecommendationProps {
  name: string;
  take: string;
  link?: string;
  freeAlternative?: string;
}

export default function ProductRecommendation({
  name,
  take,
  link,
  freeAlternative,
}: ProductRecommendationProps) {
  return (
    <div className="product-rec-box">
      <div className="flex items-start gap-3">
        <span className="text-2xl flex-shrink-0">🛍️</span>
        <div className="flex-1 min-w-0">
          <p className="text-xs text-warm-500 uppercase tracking-wide font-sans mb-1">What Worked For Us</p>
          <div className="flex items-baseline gap-2 flex-wrap">
            <span className="font-serif font-semibold text-warm-900">{name}</span>
            {link ? (
              <a
                href={link}
                className="text-sm text-sage-600 hover:underline font-sans"
                rel="nofollow sponsored"
              >
                View →
              </a>
            ) : (
              <span className="text-sm text-warm-400 font-sans italic">[link coming]</span>
            )}
          </div>
          <p className="text-sm text-warm-700 mt-1 font-sans">{take}</p>
          {freeAlternative && (
            <p className="text-sm text-sage-600 mt-2 font-sans">
              <span className="font-medium">Free alternative:</span> {freeAlternative}
            </p>
          )}
          <p className="text-xs text-warm-400 mt-2 font-sans italic">
            Affiliate link — I earn a small commission at no cost to you.
          </p>
        </div>
      </div>
    </div>
  );
}
