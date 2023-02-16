window.BENCHMARK_DATA = {
  "lastUpdate": 1676539093931,
  "repoUrl": "https://github.com/modern-js-dev/rspack",
  "entries": {
    "Rust Benchmark": [
      {
        "commit": {
          "author": {
            "email": "yangjian.fe@bytedance.com",
            "name": "yangjian.fe",
            "username": "hardfist"
          },
          "committer": {
            "email": "yangjianzju@gmail.com",
            "name": "hardfist",
            "username": "hardfist"
          },
          "distinct": true,
          "id": "ec9dbaaad51df9a9c0bb8aff09bcbc4c579140a9",
          "message": "chore: remove patch info about deleting package",
          "timestamp": "2023-02-16T16:16:06+08:00",
          "tree_id": "23ff280ce2aa24576d1b79a9d5998a43d39c8870",
          "url": "https://github.com/modern-js-dev/rspack/commit/ec9dbaaad51df9a9c0bb8aff09bcbc4c579140a9"
        },
        "date": 1676536129280,
        "tool": "cargo",
        "benches": [
          {
            "name": "criterion_benchmark/ten_copy_of_threejs",
            "value": 521303670,
            "range": "± 6729491",
            "unit": "ns/iter"
          },
          {
            "name": "high_cost_benchmark/ten_copy_of_threejs_production",
            "value": 4508733918,
            "range": "± 13059332",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jerrykingxyz@gmail.com",
            "name": "jinrui",
            "username": "jerrykingxyz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aec6e2675f62847413c9cad97bdc5b6c3eee8dcf",
          "message": "feat: skip code splitting by check import/export change (#1871)\n\n* feat: skip code splitting by check import/export change\r\n\r\n* perf: clone with rayon",
          "timestamp": "2023-02-16T17:07:30+08:00",
          "tree_id": "86618652b3da57d92dbb05a4e8a703415a4a95be",
          "url": "https://github.com/modern-js-dev/rspack/commit/aec6e2675f62847413c9cad97bdc5b6c3eee8dcf"
        },
        "date": 1676539087223,
        "tool": "cargo",
        "benches": [
          {
            "name": "criterion_benchmark/ten_copy_of_threejs",
            "value": 539099684,
            "range": "± 5896463",
            "unit": "ns/iter"
          },
          {
            "name": "high_cost_benchmark/ten_copy_of_threejs_production",
            "value": 4792938020,
            "range": "± 14590634",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}