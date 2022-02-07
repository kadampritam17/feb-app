import React from 'react';

export default function AddBookF() {
  return (
    <div>
        <div className="container">
        <div class="mb-3 row">
            <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
            <input type="text" class="form-control-plaintext" id="staticEmail" value="email@example.com"/>
            </div>
        </div>
        <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
            <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword"/>
            </div>
        </div>
        </div>

    </div>
  );
}
