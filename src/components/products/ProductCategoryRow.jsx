export function ProductCategoryRow({ name }) {
    return (
        <div className="product-row">
            <div className="product-details prd-cat">
                <h5>{name}</h5>
            </div>
        </div>
    );
}