const plt = require('matplotnode');
const x = new Array(100).fill(0).map((x, i) => i / Math.PI);

// xkcd-style plot :)
plt.xkcd();

plt.subplot("211");
plt.title('trig');
plt.plot(x, x.map(Math.sin), 'color=r', 'label=sin(x)');
plt.plot(x, x.map(Math.cos), 'color=g', 'label=cos(x)');
plt.legend();

plt.subplot("212");
plt.plot(x, x.map(Math.sin).map((t, i) => t * i), 'color=b', 'label=x * sin(x)', 'marker=o', 'linestyle=None');
plt.legend();
plt.ylim(-100, 100);

plt.save("./output/test-plot.png");
