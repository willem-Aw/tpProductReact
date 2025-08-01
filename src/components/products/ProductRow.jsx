/**
 * 
 * @param {{name: string, price: string, type: string}} product 
 * @returns 
 */

export function ProductRow({ product }) {
    const style = product.type === 'fruit' ? { backgroundColor: '#6d6d6dff', } : { backgroundColor: '#22727cff' };

    return (
        <div className="product-row">
            <div className="product-details flex" style={style}>
                <h5>{product.name}</h5>
                <p>{product.type}</p>
                <span className="price">${product.price}</span>
            </div>
        </div>
    );
}