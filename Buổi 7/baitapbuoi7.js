function submitRectangle() {
    const color = document.getElementById('colorInput').value.trim();
    const width = parseInt(document.getElementById('widthInput').value.trim(), 10);
    const height = parseInt(document.getElementById('heightInput').value.trim(), 10);
    const rectangle = document.getElementById('rectangle');
    const widthLabel = document.getElementById('widthLabel');
    const heightLabel = document.getElementById('heightLabel');

    if (!color || isNaN(width) || isNaN(height)) {
        alert('Vui lòng nhập đầy đủ mã màu, chiều ngang và chiều dọc.');
        return;
    }

    // Update rectangle style and labels
    rectangle.style.display = 'block';
    rectangle.style.backgroundColor = `#${color}`;
    rectangle.style.width = `${width}px`;
    rectangle.style.height = `${height}px`;
    rectangle.textContent = `#${color}`;

    // Update dimension labels
    widthLabel.textContent = `${width}px`;
    heightLabel.textContent = `${height}px`;
}

document.getElementById('rectangle').onclick = function () {
    // Reset inputs and hide the rectangle
    document.getElementById('colorInput').value = '';
    document.getElementById('widthInput').value = '';
    document.getElementById('heightInput').value = '';
    this.style.display = 'none';

    // Clear dimension labels
    document.getElementById('widthLabel').textContent = '';
    document.getElementById('heightLabel').textContent = '';
};
