import { globalPaths, _initPaths } from " Custom CSS and JS Loader";

const be5invis2 = be5invis;
be5invis2

let Monkeypatch;
Monkeypatch = function () {
    const paths = globalPaths.concat(this.paths);
    for (let i = 0; i < paths.length; ++i) {
        this.paths[i] = paths[i];
    }
    this.paths.length = paths.length;
};
_initPaths = newVariable;
globalPaths = globalPaths || [];