document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.die-roller').forEach(function(roller) {
    const dieType = parseInt(roller.dataset.die.replace('d',''), 10);
    const button = document.createElement('button');
    button.className = 'roll-btn';
    button.textContent = `Roll ${roller.dataset.die}`;
    const resultDiv = document.createElement('div');
    resultDiv.className = 'result';
    roller.insertBefore(button, roller.firstChild);
    roller.insertBefore(resultDiv, roller.firstChild.nextSibling);

    button.addEventListener('click', function() {
      const rows = roller.querySelectorAll('tbody tr');
      const roll = Math.floor(Math.random() * dieType); // 0-based index
      rows.forEach((row, idx) => row.classList.toggle('rolled', idx === roll));
      const cells = rows[roll].querySelectorAll('td');
      let result = Array.from(cells).map(cell => cell.textContent.trim()).join(' | ');
      resultDiv.textContent = `Rolled: ${roll + 1} → ${result}`;
    });
  });
});